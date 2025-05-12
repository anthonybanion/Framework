const { useEffect } = require("react");

function FunctionContainer(){
    const [product, setProduct] = useState([]);
    const [productCart, setProductCart] = useState([]);
    const [loanding, setLoading] = useState(true);
    const [error, setError] = useState(null);

    {useEffect(() => {
        fetch('https://fakestoreapi.com/products')

            .then(response => response.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);
    }
}

export default FunctionContainer;