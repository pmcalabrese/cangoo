REPO_SUB_TREE=cangoo-react-version/public

build-production:
	cd cangoo-react-version && npm run build

deploy: build-production
	git subtree push --prefix $(REPO_SUB_TREE) origin gh-pages
	@echo "\n$(REPO_SUB_TREE) deployed to gh-pages\nVisit https://pmcalabrese.github.io/cangoo/ \n"