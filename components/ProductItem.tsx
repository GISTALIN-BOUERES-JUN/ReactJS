import { memo } from 'react';

interface ProductItemProps {
    product: {
        id: number,
        price: number,
        title: string,
    }

}

//shallow compare

function ProductItemComponent({ product }: ProductItemProps) {
    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
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