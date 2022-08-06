import { createContext, useContext, useState } from "react";
import { Button, Text } from "@mantine/core";

const ExampleContext = createContext<any>(null);

const useExample = () => {
  return useContext(ExampleContext);
};

const ExampleProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const context = {
    addItem: (item: string) => {
      setList([...list, item]);
    },
  };

  return (
    <ExampleContext.Provider value={context}>
      {children}

      {list.map((item) => (
        <Text>{item}</Text>
      ))}
    </ExampleContext.Provider>
  );
};

/// USAGE

const ExampleUsage = () => {
  return (
    <ExampleProvider>
      <ChildComponent />
    </ExampleProvider>
  );
};

const ChildComponent = () => {
  const example = useExample();

  return <Button onClick={() => example.addItem("TEST")}>Add Item</Button>;
};

export default ExampleUsage;