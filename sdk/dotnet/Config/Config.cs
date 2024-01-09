// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Immutable;

namespace Hvitgar.Onepassword
{
    public static class Config
    {
        [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "IDE1006", Justification = 
        "Double underscore prefix used to avoid conflicts with variable names.")]
        private sealed class __Value<T>
        {
            private readonly Func<T> _getter;
            private T _value = default!;
            private bool _set;

            public __Value(Func<T> getter)
            {
                _getter = getter;
            }

            public T Get() => _set ? _value : _getter();

            public void Set(T value)
            {
                _value = value;
                _set = true;
            }
        }

        private static readonly global::Pulumi.Config __config = new global::Pulumi.Config("onepassword");

        private static readonly __Value<string?> _account = new __Value<string?>(() => __config.Get("account"));
        /// <summary>
        /// A valid account's sign-in address or ID to use biometrics unlock. Can also be sourced from `OP_ACCOUNT` environment
        /// variable. Provider will use the 1Password CLI if set.
        /// </summary>
        public static string? Account
        {
            get => _account.Get();
            set => _account.Set(value);
        }

        private static readonly __Value<string?> _opCliPath = new __Value<string?>(() => __config.Get("opCliPath"));
        /// <summary>
        /// The path to the 1Password CLI binary. Can also be sourced from `OP_CLI_PATH` environment variable. Defaults to `op`.
        /// </summary>
        public static string? OpCliPath
        {
            get => _opCliPath.Get();
            set => _opCliPath.Set(value);
        }

        private static readonly __Value<string?> _serviceAccountToken = new __Value<string?>(() => __config.Get("serviceAccountToken"));
        /// <summary>
        /// A valid 1Password service account token. Can also be sourced from `OP_SERVICE_ACCOUNT_TOKEN` environment variable.
        /// Provider will use the 1Password CLI if set.
        /// </summary>
        public static string? ServiceAccountToken
        {
            get => _serviceAccountToken.Get();
            set => _serviceAccountToken.Set(value);
        }

        private static readonly __Value<string?> _token = new __Value<string?>(() => __config.Get("token"));
        /// <summary>
        /// A valid token for your 1Password Connect server. Can also be sourced from `OP_CONNECT_TOKEN` environment variable.
        /// Provider will use 1Password Connect server if set.
        /// </summary>
        public static string? Token
        {
            get => _token.Get();
            set => _token.Set(value);
        }

        private static readonly __Value<string?> _url = new __Value<string?>(() => __config.Get("url"));
        /// <summary>
        /// The HTTP(S) URL where your 1Password Connect server can be found. Can also be sourced `OP_CONNECT_HOST` environment
        /// variable. Provider will use 1Password Connect server if set.
        /// </summary>
        public static string? Url
        {
            get => _url.Get();
            set => _url.Set(value);
        }

    }
}
