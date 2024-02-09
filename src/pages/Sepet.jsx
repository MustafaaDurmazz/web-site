import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Sepet({ user }) {
    const [Sepet, setSepet] = useState([]);
    const [toplamFiyat, setToplamFiyat] = useState(0);

    useEffect(() => {
        const sepet = JSON.parse(localStorage.getItem('Sepet')) ?? [];
        setSepet(sepet);

        // Sepetteki ürünlerin fiyatlarını topla
        let toplam = 0;
        sepet.forEach(item => {
            toplam += item.price ?? 0; // Eğer ürün fiyatı yoksa 0 olarak kabul et
        });
        setToplamFiyat(toplam);
    }, [])

    // Sepetten ürünü kaldırma fonksiyonu
    const removeFromCart = (productId, price) => {
        const updatedSepet = Sepet.filter(item => item.id !== productId);
        setSepet(updatedSepet);
        localStorage.setItem("Sepet", JSON.stringify(updatedSepet));

        // Sepetten silinen ürünün fiyatını toplam fiyattan çıkar
        setToplamFiyat(prevToplamFiyat => prevToplamFiyat - price);
    }

    return (
        <>
            <h1>Sepetim</h1>

            <div className="list-group">
                {Sepet.map((item) => (
                    <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <Link to={`/products/product/${item.id}`}>
                            {item.title.toUpperCase()}
                        </Link>
                        <div>
                            <span className="mr-2">{item.price} TL</span>
                            <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id, item.price)}>Sepetten Çıkar</button>
                        </div>
                    </div>
                ))}
            </div>

            <p>Toplam Fiyat: {toplamFiyat} TL</p>
        </>
    )
}

export default Sepet;
