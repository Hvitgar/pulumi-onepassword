// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * A 1Password item.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as onepassword from "@hvitgar/pulumi-onepassword";
 *
 * const demoPassword = new onepassword.Item("demoPassword", {
 *     vault: _var.demo_vault,
 *     title: "Demo Password Recipe",
 *     category: "password",
 *     passwordRecipe: {
 *         length: 40,
 *         symbols: false,
 *     },
 * });
 * const demoLogin = new onepassword.Item("demoLogin", {
 *     vault: _var.demo_vault,
 *     title: "Demo Terraform Login",
 *     category: "login",
 *     username: "test@example.com",
 * });
 * const demoDb = new onepassword.Item("demoDb", {
 *     vault: _var.demo_vault,
 *     category: "database",
 *     type: "mysql",
 *     title: "Demo TF Database",
 *     username: "root",
 *     database: "Example MySQL Instance",
 *     hostname: "localhost",
 *     port: "3306",
 * });
 * ```
 *
 * ## Import
 *
 * import an existing 1Password item
 *
 * ```sh
 *  $ pulumi import onepassword:index/item:Item myitem vaults/<vault uuid>/items/<item uuid>
 * ```
 */
export class Item extends pulumi.CustomResource {
    /**
     * Get an existing Item resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ItemState, opts?: pulumi.CustomResourceOptions): Item {
        return new Item(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'onepassword:index/item:Item';

    /**
     * Returns true if the given object is an instance of Item.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Item {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Item.__pulumiType;
    }

    /**
     * The category of the item. One of ["login" "password" "database"]
     */
    public readonly category!: pulumi.Output<string | undefined>;
    /**
     * (Only applies to the database category) The name of the database.
     */
    public readonly database!: pulumi.Output<string | undefined>;
    /**
     * (Only applies to the database category) The address where the database can be found
     */
    public readonly hostname!: pulumi.Output<string | undefined>;
    /**
     * Password for this item.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * Password for this item.
     */
    public readonly passwordRecipe!: pulumi.Output<outputs.ItemPasswordRecipe | undefined>;
    /**
     * (Only applies to the database category) The port the database is listening on.
     */
    public readonly port!: pulumi.Output<string | undefined>;
    /**
     * A list of custom sections in an item
     */
    public readonly sections!: pulumi.Output<outputs.ItemSection[] | undefined>;
    /**
     * An array of strings of the tags assigned to the item.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * The title of the item.
     */
    public readonly title!: pulumi.Output<string | undefined>;
    /**
     * The type of value stored in the field. One of ["STRING" "EMAIL" "CONCEALED" "URL" "OTP" "DATE" "MONTH_YEAR" "MENU"]
     */
    public readonly type!: pulumi.Output<string | undefined>;
    /**
     * The primary URL for the item.
     */
    public readonly url!: pulumi.Output<string | undefined>;
    /**
     * Username for this item.
     */
    public readonly username!: pulumi.Output<string | undefined>;
    /**
     * The UUID of the item. Item identifiers are unique within a specific vault.
     */
    public /*out*/ readonly uuid!: pulumi.Output<string>;
    /**
     * The UUID of the vault the item is in.
     */
    public readonly vault!: pulumi.Output<string>;

    /**
     * Create a Item resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ItemArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ItemArgs | ItemState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ItemState | undefined;
            resourceInputs["category"] = state ? state.category : undefined;
            resourceInputs["database"] = state ? state.database : undefined;
            resourceInputs["hostname"] = state ? state.hostname : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["passwordRecipe"] = state ? state.passwordRecipe : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["sections"] = state ? state.sections : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["title"] = state ? state.title : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["vault"] = state ? state.vault : undefined;
        } else {
            const args = argsOrState as ItemArgs | undefined;
            if ((!args || args.vault === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vault'");
            }
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["database"] = args ? args.database : undefined;
            resourceInputs["hostname"] = args ? args.hostname : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["passwordRecipe"] = args ? args.passwordRecipe : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["sections"] = args ? args.sections : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["vault"] = args ? args.vault : undefined;
            resourceInputs["uuid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Item.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Item resources.
 */
export interface ItemState {
    /**
     * The category of the item. One of ["login" "password" "database"]
     */
    category?: pulumi.Input<string>;
    /**
     * (Only applies to the database category) The name of the database.
     */
    database?: pulumi.Input<string>;
    /**
     * (Only applies to the database category) The address where the database can be found
     */
    hostname?: pulumi.Input<string>;
    /**
     * Password for this item.
     */
    password?: pulumi.Input<string>;
    /**
     * Password for this item.
     */
    passwordRecipe?: pulumi.Input<inputs.ItemPasswordRecipe>;
    /**
     * (Only applies to the database category) The port the database is listening on.
     */
    port?: pulumi.Input<string>;
    /**
     * A list of custom sections in an item
     */
    sections?: pulumi.Input<pulumi.Input<inputs.ItemSection>[]>;
    /**
     * An array of strings of the tags assigned to the item.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The title of the item.
     */
    title?: pulumi.Input<string>;
    /**
     * The type of value stored in the field. One of ["STRING" "EMAIL" "CONCEALED" "URL" "OTP" "DATE" "MONTH_YEAR" "MENU"]
     */
    type?: pulumi.Input<string>;
    /**
     * The primary URL for the item.
     */
    url?: pulumi.Input<string>;
    /**
     * Username for this item.
     */
    username?: pulumi.Input<string>;
    /**
     * The UUID of the item. Item identifiers are unique within a specific vault.
     */
    uuid?: pulumi.Input<string>;
    /**
     * The UUID of the vault the item is in.
     */
    vault?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Item resource.
 */
export interface ItemArgs {
    /**
     * The category of the item. One of ["login" "password" "database"]
     */
    category?: pulumi.Input<string>;
    /**
     * (Only applies to the database category) The name of the database.
     */
    database?: pulumi.Input<string>;
    /**
     * (Only applies to the database category) The address where the database can be found
     */
    hostname?: pulumi.Input<string>;
    /**
     * Password for this item.
     */
    password?: pulumi.Input<string>;
    /**
     * Password for this item.
     */
    passwordRecipe?: pulumi.Input<inputs.ItemPasswordRecipe>;
    /**
     * (Only applies to the database category) The port the database is listening on.
     */
    port?: pulumi.Input<string>;
    /**
     * A list of custom sections in an item
     */
    sections?: pulumi.Input<pulumi.Input<inputs.ItemSection>[]>;
    /**
     * An array of strings of the tags assigned to the item.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The title of the item.
     */
    title?: pulumi.Input<string>;
    /**
     * The type of value stored in the field. One of ["STRING" "EMAIL" "CONCEALED" "URL" "OTP" "DATE" "MONTH_YEAR" "MENU"]
     */
    type?: pulumi.Input<string>;
    /**
     * The primary URL for the item.
     */
    url?: pulumi.Input<string>;
    /**
     * Username for this item.
     */
    username?: pulumi.Input<string>;
    /**
     * The UUID of the vault the item is in.
     */
    vault: pulumi.Input<string>;
}
