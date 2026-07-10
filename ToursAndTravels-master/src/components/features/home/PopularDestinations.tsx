

export default function PopularDestinations() {
    return (
        <section className="py-20 bg-slate-100 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Popular Destinations</h2>
                <p className="text-slate-500 dark:text-slate-400 mb-10">Explore the cities everyone is talking about.</p>

                <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[500px]">
                    {/* Item 1 (Large) - London */}
                    <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group cursor-pointer">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEBKR46u5mhShVBBR6HR3yyfLV712aXjNjbVy3DG0tC9O5S5vwL7sGq-7jbTyLt35Z7qUHKp5moov2cOnzEWDsfLAEnFEE6FMPaINht7vyza11Vg8MldfeYA6z_bZkefA-6jokHMQnvknE1qBLFgONTryrPGzs7yrPZgSlPblcZHs_f7MLTNrnX7Rwkk3hNWW8lDh-y6VUZJdcts4wCCjT42IQOe3Lk9cAiemb9jO7xIPEP6AYasn0KsADtayU4cvjkivWJVsZGA"
                            alt="London Cityscape"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-2xl font-bold">London</h3>
                            <p className="text-sm opacity-90">1,200+ Hotels</p>
                        </div>
                    </div>

                    {/* Item 2 - New York */}
                    <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden group cursor-pointer">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNUBxdD0wB_rSY4uCavmdYOUeu3TJchFxLH3X-ABmdIPx9Aj-G7-nRuxqmZMmbmfU375mfyr1gvaU71GZ-guSBOjUV3GDn_ik4qDiV1EQaynUHlqYiLcIfBTPmVv_e4mZUqDNAD3EAlCqV3qFJcZZeT2GY0S01xMsMU7eASpQw3hHT4SF1elw3xvd3ohieX7-34HizmJ6cIg0bmDhpMsrgo81nrlv24tPTkkubkFxOLt0ZYTdQ8e7ndge06qm9OW8SHA1_C6eIPw"
                            alt="New York Skyline"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-lg font-bold">New York</h3>
                        </div>
                    </div>

                    {/* Item 3 - Dubai */}
                    <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden group cursor-pointer">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw3Ipci0x_zWi-2JfTcmCYAjHuk-qYrqnAWZjZ2XsPo3xQqgy3N36OAdHmHzah1OY4t5jeqloyPZl6HZtg72nBiA5YSNi02g_XubA9yoF_cpz5q0MqE41wZ54rz0XFmT_UCJTpovNtPCLKUFCQRvSXtZrYrVq8z2taak7SyIoqtyi7xtf_sdanW4XHyyTwLnQzq9gXaAFBGkq25zGYZFHhUiYrxo7empOTTlimk1xzuSw-DguQBA6dAc7Wzb-k_rl1Wn4La8XEbA"
                            alt="Dubai Skyline"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-lg font-bold">Dubai</h3>
                        </div>
                    </div>

                    {/* Item 4 (Wide) - Singapore */}
                    <div className="col-span-2 row-span-1 relative rounded-xl overflow-hidden group cursor-pointer">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQKZsUEDWjqLR5hJ4R-4c-FHkijgw3dIKm1iB3873o_z1N_jQcdzHl4uF2R3hRTiW2cSjjuXMOfCRGkVXNvnXkpakVu6tYjKBb-zS-5eI2Pmp3d8UoSCYw1p8ZJqjt5BUYjD_6Pz6Jc5yKgJtpMnuBIy5HGztqvjdYhxoXCEYX_S5YaP7boRSgAkZ3jb9gsNrZerY9phs8TCA55SaLIyb8nSHqVp1g3ihYza1M8tukoMwQQD4UOJ63T4-EZffdata0vffZSMHqVw"
                            alt="Singapore Gardens by the Bay"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-xl font-bold">Singapore</h3>
                            <p className="text-xs opacity-90">Asia's Greenest City</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
