EXTENSION :=js
SOURCE_FILES := $(shell find * -type f -name '*.$(EXTENSION)' | grep -v node_modules)
EXERCISES := $(shell find * -type f -name '*.$(EXTENSION)' | grep -v node_modules | cut -d/ -f1 | uniq)
LINT_TARGETS := $(addprefix lint-,$(EXERCISES))
LINT_FIX_TARGETS := $(addsuffix -fix,$(LINT_TARGETS))
OUT_DIR=.build
OBJECTS=$(addprefix $(OUT_DIR)/,$(EXERCISES))
LINT_OBJECTS:=$(addprefix $(OUT_DIR)/,$(LINT_TARGETS))
LINT_FIX_OBJECTS:=$(addprefix $(OUT_DIR)/,$(LINT_FIX_TARGETS))

.PHONY: lint test lint-fix
all: lint test

lint: $(LINT_TARGETS)
lint-fix: $(LINT_FIX_TARGETS)
test: $(EXERCISES)

$(LINT_TARGETS) $(LINT_FIX_TARGETS) $(EXERCISES) : %: $(OUT_DIR)/%

$(OUT_DIR):
	@ mkdir -p $@

clean:
	rm -rf $(OUT_DIR)

.SECONDEXPANSION:

GET_DEP = $(filter $(patsubst $(OUT_DIR)/%,%,$@)%,$(SOURCE_FILES))
$(OBJECTS): $$(GET_DEP) | $(OUT_DIR)
	$(eval EXERCISE := $(patsubst $(OUT_DIR)/%,%,$@))
	@ echo "Testing $(EXERCISE)..."
	@ cd $(EXERCISE) && npm install && npm run test
	@ touch $@

GET_DEP_LINT = $(filter $(patsubst $(OUT_DIR)/lint-%,%,$@)%,$(SOURCE_FILES))
$(LINT_OBJECTS): $$(GET_DEP_LINT) | $(OUT_DIR)
	$(eval EXERCISE := $(patsubst $(OUT_DIR)/lint-%,%,$@))
	@ echo "Linting $(EXERCISE)..."
	@ eslint --config .eslintrc.json $(EXERCISE)/*.js
	@ touch $@

GET_DEP_LINT_FIX = $(filter $(patsubst $(OUT_DIR)/lint-%-fix,%,$@)%,$(SOURCE_FILES))
$(LINT_FIX_OBJECTS): $$(GET_DEP_LINT_FIX) | $(OUT_DIR)
	$(eval EXERCISE := $(patsubst $(OUT_DIR)/lint-%-fix,%,$@))
	@ echo "Lint-fixing $(EXERCISE)..."
	@ eslint --config .eslintrc.json --fix $(EXERCISE)/*.js
	@ touch $@
