EXTENSION :=js
# SOURCE_FILES := $(shell find * -type f -name '*.$(EXTENSION)' | grep -v node_modules)
SOURCE_FILES := $(shell find * -type f -name '*.$(EXTENSION)' | grep -v node_modules)
EXERCISES := $(shell find * -type f -name '*.$(EXTENSION)' | grep -v node_modules | cut -d/ -f1 | uniq)
LINT_TARGETS := $(addprefix lint-,$(EXERCISES))
OUT_DIR=.build
OBJECTS=$(addprefix $(OUT_DIR)/,$(EXERCISES))

.PHONY: lint test
all: lint test-all $(LINT_TARGETS)

lint: $(LINT_TARGETS)

$(LINT_TARGETS):
	@ echo $@ | sed -E 's/lint-(.+)/\1\/*.js/g' | xargs -n1 | grep -v _test | xargs eslint --config .eslintrc.json

test-all: $(EXERCISES)

$(EXERCISES): %: .build/%

$(OUT_DIR):
	@ mkdir -p $@

clean:
	@ rm -rf $(OUT_DIR)
	@ rm -rf ./*/node_modules/

.SECONDEXPANSION:

GET_DEP = $(filter $(patsubst $(OUT_DIR)/%,%,$@)%,$(SOURCE_FILES))
$(OBJECTS): $$(GET_DEP) | $(OUT_DIR)
	$(eval EXERCISE := $(patsubst $(OUT_DIR)/%,%,$@))
	@ echo "Testing $(EXERCISE)..."
	@ cd $(EXERCISE) && npm install && npm run test
	@ touch $@
