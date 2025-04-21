export interface ICounterType {
  type: string;
}

export const Inc = (): ICounterType => ({
  type: "Increament",
});

export const Dec = (): ICounterType => ({
  type: "Decreament",
});
