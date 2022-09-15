import { Product } from '../components/Product';
import { useProducts } from '../hooks/products';
import { Error } from '../components/Error';
import { Loader } from '../components/Loader'
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import React, { useContext } from 'react';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';


export function ProductPage() {
  const {loading,error,products, addProduct} = useProducts()
  const { modal,open,close } = useContext(ModalContext)
 
  const createHanler = (product: IProduct) => {
   close()
   addProduct(product)
  }
 
   return (
    <div className='container mx-auto max-w-2xl pt-5'>
     {loading &&  <Loader />}
     {error && <Error error={error} />}
     {products.map(product => <Product key={product.id} product={product}/>)}
 
     {modal && <Modal title='Create new product' onClose={close}>
       <CreateProduct onCreate={createHanler}/>
     </Modal>}
 
     <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2' onClick={open}>+</button>
    </div>
   )
}