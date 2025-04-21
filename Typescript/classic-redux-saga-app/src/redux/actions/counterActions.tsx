export interface ICounter {
  type: string;
}

export const INC = (): ICounter => ({
  type: "INCREAMENT",
});

export const DEC = (): ICounter => ({
  type: "DECREAMENT",
});
