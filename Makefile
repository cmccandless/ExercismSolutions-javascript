.PHONY: lint test
all: lint test-all

lint:
	@echo "No linter configured"

test:
	@ $(foreach FILE,$(FILES), \
		$(call dotest,$(FILE)) \
	)

test-all:
	@ $(foreach FILE,$(shell ls -d */), \
		$(call dotest, $(FILE)) \
	)

define dotest
	cd $(1); \
	npm run $(OPTS) test 2>&1 || exit 1; \
	cd ..;
endef
