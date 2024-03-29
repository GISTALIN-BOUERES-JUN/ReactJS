import { memo, useState } from 'react';
import { AddProductToWishList } from './AddProductToWishList';

interface ProductItemProps {
    product: {
        id: number,
        price: number,
        priceFormatted: string,
        title: string,
    }

    onAddToWishList: (id: number) => void;

}

//shallow compare

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {

    const [isAddingToWishList, setIsAddingToWishList] = useState(false);



    return (
        <div>
            {product.title} - <strong>{product.priceFormatted}</strong>
            <button onClick={() => setIsAddingToWishList(true)}>Adicionar aos favoritos</button>

            {isAddingToWishList && (<AddProductToWishList
                onAddToWishList={() => onAddToWishList(product.id)}
                onRequestClose={() => setIsAddingToWishList(false)}
            />)}
        </div>
    )


}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
})


//Memo is used for 
//*Pure Functional Components
//* Renders too often
//* Re-render with same props