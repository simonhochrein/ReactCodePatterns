import { Anchor, Button } from "@mantine/core";
import Link from "next/link";

const Index = () => {
    return (
        <div>
            <Link href={'/context'}>
                <Anchor>
                    Context
                </Anchor>
            </Link>
        </div>
    )
}

export default Index;