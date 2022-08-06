import { Button, Group, Text } from "@mantine/core";
import { createContext, useContext } from "react";

const ExampleContext = createContext(false);

const ChildComponent = () => {
    const ctx = useContext(ExampleContext);

    return (
        <Group>
            <Text>{ctx ? 'True' : 'False'}</Text>
        </Group>
    )
}

const ContainerComponent = () => {
    return (
        <ChildComponent/>
    );
}

const ContextPage = () => {
    return (
        <Group>
            <ExampleContext.Provider value={false}>
                <ContainerComponent />
            </ExampleContext.Provider>
        </Group>
    )
}

export default ContextPage;