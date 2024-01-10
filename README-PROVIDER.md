# Foo Resource Provider <!-- TODO -->

The Foo Resource Provider lets you manage [Foo](http://example.com) resources.

## Installing <!-- TODO -->

This package is available for several languages/platforms:

### Node.js (JavaScript/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

```bash
npm install @pulumi/foo
```

or `yarn`:

```bash
yarn add @pulumi/foo
```

### Python

To use from Python, install using `pip`:

```bash
pip install pulumi_foo
```

### Go

To use from Go, use `go get` to grab the latest version of the library:

```bash
go get github.com/pulumi/pulumi-foo/sdk/go/...
```

### .NET

To use from .NET, install using `dotnet add package`:

```bash
dotnet add package Pulumi.Foo
```

## Configuration

The following configuration points are available for the `onepassword` provider:

- `onepassword:opCliPath` (environment: `OP_CLI_PATH`) - The path to the 1Password CLI binary. Defaults to `op`.
- `onepassword:account` (environment: `OP_ACCOUNT`) - A valid account's sign-in address or ID to use biometrics unlock. Provider will use the 1Password CLI if set.
- `onepassword:serviceAccountToken` (environment: `OP_SERVICE_ACCOUNT_TOKEN`) - A valid 1Password service account token. Provider will use the 1Password CLI if set.
- `onepassword:token` (environment: `OP_CONNECT_TOKEN`) - A valid token for your 1Password Connect server. Provider will use 1Password Connect server if set.
- `onepassword:url` (environment: `OP_CONNECT_HOST`) - The HTTP(S) URL where your 1Password Connect server can be found. Provider will use 1Password Connect server if set.

A valid configuration consists of either

- `account`
- `serviceAccountToken`
- `token` and `url`.

## Reference <!-- TODO -->

For detailed reference documentation, please visit [the Pulumi registry](https://www.pulumi.com/registry/packages/foo/api-docs/).
