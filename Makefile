.PHONY: lint test
all: lint test-all

lint:
	@ls ./*/*.js | xargs -n1 | grep -v _test | xargs eslint --config .eslintrc.json

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
	if [ -f .solution.json ]; then npm run $(OPTS) test 2>&1 || exit 1; fi; \
	cd ..;
endef
