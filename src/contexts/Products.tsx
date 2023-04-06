import React, { createContext, useState, useContext } from 'react'

type MenuType = {
	id?: number,
	name?: string
}
const defaultValue = [{

}]

type TCtxValue = [ MenuType[], React.Dispatch<React.SetStateAction<MenuType[]>> ]

export const ProductsCtx = createContext<TCtxValue>([ defaultValue, () => { } ])

const Provider: React.FC = ({ children }:any) => {
	const [products, setProducts] = useState<MenuType[]>(defaultValue)

	return (
		<ProductsCtx.Provider value={[ products, setProducts ] as TCtxValue}>
			{children}
		</ProductsCtx.Provider>
	)
}

export const useProducts = () => useContext(ProductsCtx)

export default React.memo(Provider) as typeof Provider