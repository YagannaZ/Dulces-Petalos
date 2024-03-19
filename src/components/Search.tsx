import { ChangeEvent } from 'react';

function Search({ onChange }: { onChange: (e: ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <div className='offset-5 col-3 mt-4'>
            <input type='text' placeholder='Search' className='w-100' onChange={onChange} />
        </div>
    )
}

export default Search;
