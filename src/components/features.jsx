import React from 'react'
import Card from '../templates/Card'

const Features = () => {

    const loremCard = [
        {
            title: "Lorem Ipsum",
            subheader: 'Lorem',
            number: "01",
            message: ''
        },
        {
            title: "Lorem Ipsum",
            subheader: 'Lorem',
            number: "02",
            message: ''
        },
        {
            title: "Lorem Ipsum",
            subheader: 'Lorem',
            number: "03",
            message: ''
        },
    ]

    return (
        <section className='w-full h-auto bg-main overflow-hidden py-20 pt-24'>
            <div className='w-full mx-auto max-w-[1700px] flex items-center justify-center px-10'>

                <div className='flex gap-x-7 flex-col md:flex-row gap-y-10'>
                    {loremCard.map((items) => {
                        return (
                            <Card title={items.title} subheader={items.subheader} number={items.number} />
                        )
                    })}
                </div>


            </div>
        </section>
    )
}

export default Features