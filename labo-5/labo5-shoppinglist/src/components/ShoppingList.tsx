import { useState } from "react";

interface ShoppingListItem {
    name: string;
    quantity: number;
}

const ShoppingList = () => {
    const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([]);
    const [name, setName] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);
    const [itemAccepted, setItemAccepted] = useState<number>(0);

    const handleAddToShoppingList: React.MouseEventHandler<HTMLButtonElement> = () => {

        if (name === "" || quantity <= 0) {
            setItemAccepted(2);            
        }
        else {
            setItemAccepted(1);
            setShoppingList([...shoppingList, {name, quantity}]);
            setName("");
            setQuantity(0);
        }        
    }

    const removeItem = (i: number) => {
        let copy = shoppingList.filter((e, index) => index !== i);
        setShoppingList(copy);
    }

    return(
        <>
            {
                itemAccepted === 1 ?
                <p style={{color: "green"}}>Item added to shopping list</p> :
                itemAccepted === 2 && <p style={{color: "red"}}>Quantity must be greater than 0</p>
            }
            <div>
                <label>Name: <input type="text" value={name} onChange={(event) => setName(event.target.value)}/></label><br />
                <label>Quantity: <input type="number" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))}/></label><br />
                <button onClick={handleAddToShoppingList}>Add</button>
            </div>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th></th>
                </thead>
                <tbody>
                    {
                        shoppingList.map((element, index) => (
                            <tr key={index}>
                                <td>{element.name}</td>
                                <td>{element.quantity}</td>
                                <td><button onClick={() => removeItem(index)}>Remove</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default ShoppingList;