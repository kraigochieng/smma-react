import React, { useState } from 'react'

export default function QuoteForm() {
  
    const [quoteFormData, setQuoteFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        project: '',
        budget: 'Please Advice'
    })

    function handleChange(event) {
        const {name, value} = event.target

        setQuoteFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    return (
        <form>
            <div>
                <label htmlFor="name">Name (required)</label>
                <input id="name" type="text" placeholder="Your name" value={quoteFormData.name} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="company">Company (required)</label>
                <input id="name" type="text" placeholder="Your company name" value={quoteFormData.company} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="name">Email (required)</label>
                <input id="name" type="email" placeholder="Your working email" value={quoteFormData.email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="name">Phone (required)</label>
                <input id="name" type="tel" placeholder="Your actual phone number" value={quoteFormData.phone} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="name">Project Name (required) </label>
                <input id="name" type="text" placeholder="Your project title" value={quoteFormData.project} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="budget">Choose A Budget (KES)</label>
                <select id="budget" value={quoteFormData.budget} onChange={handleChange}>
                    <option value="Please Advice">Please Advice</option>
                    <option value="Less than 100K">Less than 100K</option>
                    <option value="100K - 250K">100K - 250K</option>
                    <option value="250K - 500K">250K - 500K</option>
                    <option value="Over 500K">Over 500K</option>
                </select>
            </div>
            <button type="button">Get A Quote</button>
        </form>

  )
}
