import React from "react";
import { useDencrypt } from "use-dencrypt-effect";

const values = ["asla durma", "yorulmana değecek", "pes etme"];

export const ShuffleText = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2250);

    return () => clearInterval(action);
  }, []);

  return <span>{result}</span>;
};
