// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace bmitzkus.Onepassword
{
    /// <summary>
    /// The provider type for the onepassword package. By default, resources use package-wide configuration
    /// settings, however an explicit `Provider` instance may be created and passed during resource
    /// construction to achieve fine-grained programmatic control over provider settings. See the
    /// [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
    /// </summary>
    [OnepasswordResourceType("pulumi:providers:onepassword")]
    public partial class Provider : global::Pulumi.ProviderResource
    {
        /// <summary>
        /// A valid account's sign-in address or ID to use biometrics unlock. Can also be sourced from `OP_ACCOUNT` environment
        /// variable. Provider will use the 1Password CLI if set.
        /// </summary>
        [Output("account")]
        public Output<string?> Account { get; private set; } = null!;

        /// <summary>
        /// The path to the 1Password CLI binary. Can also be sourced from `OP_CLI_PATH` environment variable. Defaults to `op`.
        /// </summary>
        [Output("opCliPath")]
        public Output<string?> OpCliPath { get; private set; } = null!;

        /// <summary>
        /// A valid 1Password service account token. Can also be sourced from `OP_SERVICE_ACCOUNT_TOKEN` environment variable.
        /// Provider will use the 1Password CLI if set.
        /// </summary>
        [Output("serviceAccountToken")]
        public Output<string?> ServiceAccountToken { get; private set; } = null!;

        /// <summary>
        /// A valid token for your 1Password Connect server. Can also be sourced from `OP_CONNECT_TOKEN` environment variable.
        /// Provider will use 1Password Connect server if set.
        /// </summary>
        [Output("token")]
        public Output<string?> Token { get; private set; } = null!;

        /// <summary>
        /// The HTTP(S) URL where your 1Password Connect server can be found. Can also be sourced `OP_CONNECT_HOST` environment
        /// variable. Provider will use 1Password Connect server if set.
        /// </summary>
        [Output("url")]
        public Output<string?> Url { get; private set; } = null!;


        /// <summary>
        /// Create a Provider resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Provider(string name, ProviderArgs? args = null, CustomResourceOptions? options = null)
            : base("onepassword", name, args ?? new ProviderArgs(), MakeResourceOptions(options, ""))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
    }

    public sealed class ProviderArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// A valid account's sign-in address or ID to use biometrics unlock. Can also be sourced from `OP_ACCOUNT` environment
        /// variable. Provider will use the 1Password CLI if set.
        /// </summary>
        [Input("account")]
        public Input<string>? Account { get; set; }

        /// <summary>
        /// The path to the 1Password CLI binary. Can also be sourced from `OP_CLI_PATH` environment variable. Defaults to `op`.
        /// </summary>
        [Input("opCliPath")]
        public Input<string>? OpCliPath { get; set; }

        /// <summary>
        /// A valid 1Password service account token. Can also be sourced from `OP_SERVICE_ACCOUNT_TOKEN` environment variable.
        /// Provider will use the 1Password CLI if set.
        /// </summary>
        [Input("serviceAccountToken")]
        public Input<string>? ServiceAccountToken { get; set; }

        /// <summary>
        /// A valid token for your 1Password Connect server. Can also be sourced from `OP_CONNECT_TOKEN` environment variable.
        /// Provider will use 1Password Connect server if set.
        /// </summary>
        [Input("token")]
        public Input<string>? Token { get; set; }

        /// <summary>
        /// The HTTP(S) URL where your 1Password Connect server can be found. Can also be sourced `OP_CONNECT_HOST` environment
        /// variable. Provider will use 1Password Connect server if set.
        /// </summary>
        [Input("url")]
        public Input<string>? Url { get; set; }

        public ProviderArgs()
        {
        }
        public static new ProviderArgs Empty => new ProviderArgs();
    }
}
