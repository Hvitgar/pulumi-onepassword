// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace Hvitgar.Onepassword.Outputs
{

    [OutputType]
    public sealed class GetItemSectionResult
    {
        public readonly ImmutableArray<Outputs.GetItemSectionFieldResult> Fields;
        public readonly string Id;
        public readonly string Label;

        [OutputConstructor]
        private GetItemSectionResult(
            ImmutableArray<Outputs.GetItemSectionFieldResult> fields,

            string id,

            string label)
        {
            Fields = fields;
            Id = id;
            Label = label;
        }
    }
}
