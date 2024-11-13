import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {
    render() {
        
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói về điều trị rối loạn giấc ngủ
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px" 
                            src="https://www.youtube.com/embed/0goC0rTZ_mQ" 
                            title="Di chứng mất ngủ hậu COVID-19" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>
                            Trong các di chứng hậu Covid thì mất ngủ lo âu, thiếu ngủ là tình trạng nhiều người gặp phải. Theo Thạc sĩ tâm lý Đặng Thị Thanh Tùng tại Bệnh viện ĐKQT Vinmec Times City thì rối loạn giấc ngủ, mất ngủ hậu Covid là 1 trong những yếu tố hậu Covid để lại về sức khỏe tâm thần nặng nề nhất mà người bệnh gặp phải. Nguyên nhân mất ngủ hậu Covid có thể là do triệu chứng từ Covid như ho, đau đầu, sốt, ớt lạnh cơ thể, do tâm lý, môi trường…từ đó khiến cho cơ thể mệt mỏi và dẫn tới mất ngủ lo âu. Nếu mất ngủ thường xuyên trong thời gian bị Covid thì không đáng lo. Trong trường hợp tình trạng mất ngủ hậu Covid kéo dài dưới 1 tháng thì người bệnh có thể thay đổi lối sống, sinh hoạt hàng ngày để giúp tâm lý thoải mái, dễ đi vào giấc ngủ hơn.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
