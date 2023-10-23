function About(){
    return (
        <div >
            <div className="flex mt-6 justify-center">

                <div className=" justify-center w-[75em] rounded-md h-90 bg-[#376f5ccc] p-6">
                    <h1 className="justify-center mt-6 text-2xl font-bold">
                        Non Profit Organization
                    </h1>
                        <h2 className="text-lg font-ligth"> 
                        A non-profit has separate systems for fundraising, volunteer engagement, program
    delivery. Donor and volunteer data is fragmented, limiting insights. It is difficult to assess
    program efficacy. Scaling systems requires complex coordination.

    The lack of integration across systems severely inhibits the organization's ability to
    coordinate engagements and demonstrate impact. For example, volunteers are assigned to
    projects without visibility into their interests and skills. Donors also cannot be recognized
    or stewarded based on a complete view of their contributions and program preferences.
    The non-profit needs consolidated data to improve volunteer experiences, donor retention and strategic decision making.

    The solution would identify microservices aligned to non-profit capabilities like donor and
    volunteer management. These would expose relevant engagement data APIs managed by
    a gateway. A cloud data warehouse consolidates this data for analytics. This approach
    incrementally decomposes siloed systems over time into focused, decoupled services that
    deliver unified data access through standardized APIs. There are some specifications:

    ▪ Develop microservices for donor management, volunteer coordination, programs.
    ▪ Expose relevant engagement data via APIs controlled by a gateway.
    ▪ Ingest API data into a cloud data warehouse.
    ▪ Provide analytics across engagement data to optimize operations.
                        </h2>
                </div>
                
            </div>
            <h1 className="flex justify-center font-semibold text-black h-10 bg-[#376f5ccc] text-3xl mt-6">DESARROLLADORES</h1>
            <div className="flex space-x-4 justify-center">
                <div className="bg-gray-200 w-[30em] h-40 mt-12 rounded-md shadow-xl">
                    <h1 className="flex place-content-center mt-4">Kaleth Benjumea Hernandez</h1>
                    <h3 className="flex place-content-end mt-[6em] mr-4">Más información</h3>
                </div>
                <div className="bg-gray-200 w-[30em] h-40 mt-12 rounded-md shadow-xl">
                <h1 className="flex place-content-center mt-4">Harlem Hernandez Rodriguez</h1>
                    <h3 className="flex place-content-end mt-[6em] mr-4">Más información</h3>
                </div>
                <div className="bg-gray-200 w-[30em] h-40 mt-12 rounded-md shadow-xl">
                <h1 className="flex place-content-center mt-4">Camila</h1>
                    <h3 className="flex place-content-end mt-[6em] mr-4">Más información</h3>
                </div>
            </div>
        
        </div>
      );
}

export default About