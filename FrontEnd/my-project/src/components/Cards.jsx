import React from 'react'

function Cards({item}) {
    return (
        <>
            <div className='my-4'>
                <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.isPaid?"Paid":"Free"}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions flex justify-between">
                            <div className="badge badge-outline">{item.price} $</div>
                            <div className="rounded-full border-[2px] px-2 py-1 hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
