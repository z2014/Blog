1.0.3 / 2017-07-21
=================
  * [Fix] be robust against function name mangling
  * [Refactor] move function name detection to separate file

1.0.2 / 2017-07-14
=================
  * [Refactor] shim: Remove unnecessary `!functionsHaveNames` check

1.0.1 / 2017-07-11
=================
  * [Fix] in IE 9-11, we must rely on `.call` being available (#13)
  * [Fix] ensure that `Function.prototype.name` does not erase the getter
  * [Deps] update `is-callable`
  * [Dev Deps] add `safe-publish-latest`
  * [Dev Deps] update `tape`, `jscs`, `nsp`, `eslint`, `@ljharb/eslint-config`, `@es-shims/api`
  * [Tests] up to `node` `v8.1`; `v7.10`, `v6.11`, `v4.8`; improve matrix; newer npm fails on older nodes
  * [Tests] use `Object` to avoid function name inference in node 7

1.0.0 / 2016-02-27
=================
  * Initial release.
