import { } from 'react'
import { storeInfo } from '../mock/stores'
import Stores from '../CompanyStores/CompanyStores'

const StoreList = () => {
    return (
        <div className="mt-4 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {storeInfo.map((store) => (
                    <div key={store.id} className="flex justify-center">
                        <Stores
                            id={store.id}
                            nameCompany={store.nameCompany}
                            description={store.description}
                            categorySeller={store.categorySeller}
                            itemsCompany={store.itemsCompany}
                            logoCompany={store.logoCompany}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StoreList
