// Children Components
import Header from '../../containers/Header/Header';
import Footer from '../../components/footer/footer';

// Style App
import '../../style/search_product/search.css';

const NoSearchResult = () => {
    return (
        <div className="wrap_search_none_all">
            <Header />
            <div className="waring_result">
                <div className="waring_result_alert">
                    <p><i className="far fa-question-circle"></i> Rất tiếc, không tìm thấy sản phẩm phù hợp với lựa chọn của bạn</p>
                </div>
                <a href="http://localhost:3000">Tiếp tục mua sắm</a>
            </div>
            <Footer />
        </div>
    )
}

export default NoSearchResult;