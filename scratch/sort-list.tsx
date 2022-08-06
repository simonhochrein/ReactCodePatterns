import { useEffect, useState } from "react";

const SortingList = ({
    items,
    keys,
    onRender,
}) => {
    //...
}

<SortingList
    items={[/* data */]}
    keys={['name', 'age']}
    onRender={(item, key) => {
        return (
            <Item {...item}/>
        );
    }}
/>

/// 3 Layers

const ProductList = ({
    items,
    onUpdate,
}) => {
    //...
    const [internalItems, setInternalItems] = useState(items);

    useEffect(() => {
        // debounce
        onUpdate(internalItems);
    }, [internalItems]);

    const itemHandlers = {
        onUpdate: (item) => {
            if(item.qty == 0) {
                // launch delete
            }
            setInternalItems(internalItems.map((i) => {
                if (i.id === item.id) {
                    return item;
                }
                return i;
            }));
        }
    }

    return (
        <SortingList
            items={internalItems}
            keys={['name', 'age']}
            onRender={(item, key) => {
                return (
                    <Item {...item} {...itemHandlers} />
                );
            }
        />
    )
}

<ProductList items={[]} onUpdate={() => { /* ... */ }} />

/// OrderDetail -> ProductList -> SortingList -> ItemCard -> Stepper