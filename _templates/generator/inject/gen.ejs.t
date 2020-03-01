---
to: "_templates/<%= folder %>/<%= generatorType %>/<%= templateFile %>.inject.ejs.t"
---
---
to: <%= destinationFile %>
inject: true
after: <%= after %>
before: <%= before ? before : null %>
unless_exists: <%= unlessExists %>
skip_if: <%= skipIf ? skipIf : null %>
---
<%- template %>
