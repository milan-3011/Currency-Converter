import { useEffect, useState } from 'react'

function Currency({ currency}) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_pSvRdAxb0Lu0KIgEFWNzoNU1JkfHsWbRD5UM56N8&currencies=&base_currency=${currency}`)
            .then(res => res.json())
            .then((res) => setData(res.data))
            .catch(error => console.error('Error fetching data:', error));
    }, [currency]);

    console.log(data);

    return data;
}

export default Currency