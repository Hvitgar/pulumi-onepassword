// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface ItemPasswordRecipe {
    /**
     * Use digits [0-9] when generating the password.
     */
    digits?: pulumi.Input<boolean>;
    /**
     * The length of the password to be generated.
     */
    length?: pulumi.Input<number>;
    /**
     * Use letters [a-zA-Z] when generating the password.
     */
    letters?: pulumi.Input<boolean>;
    /**
     * Use symbols [!@.-_*] when generating the password.
     */
    symbols?: pulumi.Input<boolean>;
}

export interface ItemSection {
    /**
     * A list of custom fields in the section.
     */
    fields?: pulumi.Input<pulumi.Input<inputs.ItemSectionField>[]>;
    /**
     * A unique identifier for the section.
     */
    id?: pulumi.Input<string>;
    /**
     * The label for the section.
     */
    label: pulumi.Input<string>;
}

export interface ItemSectionField {
    /**
     * A unique identifier for the field.
     */
    id?: pulumi.Input<string>;
    /**
     * The label for the field.
     */
    label: pulumi.Input<string>;
    /**
     * Password for this item.
     */
    passwordRecipe?: pulumi.Input<inputs.ItemSectionFieldPasswordRecipe>;
    /**
     * Purpose indicates this is a special field: a username, password, or notes field. One of ["USERNAME" "PASSWORD" "NOTES"]
     */
    purpose?: pulumi.Input<string>;
    /**
     * The type of value stored in the field. One of ["STRING" "EMAIL" "CONCEALED" "URL" "OTP" "DATE" "MONTH_YEAR" "MENU"]
     */
    type?: pulumi.Input<string>;
    /**
     * The value of the field.
     */
    value?: pulumi.Input<string>;
}

export interface ItemSectionFieldPasswordRecipe {
    /**
     * Use digits [0-9] when generating the password.
     */
    digits?: pulumi.Input<boolean>;
    /**
     * The length of the password to be generated.
     */
    length?: pulumi.Input<number>;
    /**
     * Use letters [a-zA-Z] when generating the password.
     */
    letters?: pulumi.Input<boolean>;
    /**
     * Use symbols [!@.-_*] when generating the password.
     */
    symbols?: pulumi.Input<boolean>;
}
