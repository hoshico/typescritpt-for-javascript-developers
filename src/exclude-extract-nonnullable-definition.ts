export {};

type MyExclude = DebugType
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude

type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;