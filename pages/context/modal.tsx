import {
  Box,
  Button,
  Card,
  Center,
  createStyles,
  Group,
  Overlay,
  Text,
} from "@mantine/core";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

const ModalContext = createContext<any>(null);

const Modal: FC<PropsWithChildren<{ open: boolean; onClose(): void }>> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <ModalContext.Provider value={{ onClose }}>
      <Box sx={{ display: open ? "block" : "none" }}>
        <Overlay color={"black"} zIndex={0} />
        <Card sx={{ width: 200, height: 400 }}>{children}</Card>
      </Box>
    </ModalContext.Provider>
  );
};

const ModalHeader: FC = () => {
  const ctx = useContext(ModalContext);
  return (
    <Group>
      <Text>Header</Text>
      <Button
        onClick={() => {
          ctx.onClose();
        }}
      >
        Close
      </Button>
    </Group>
  );
};

const ModalExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <Group>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <ModalHeader />
        <Group>
          <Text>Content</Text>
        </Group>
      </Modal>
    </Group>
  );
};

export default ModalExample;
