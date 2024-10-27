// src/pages/Home.js
import React from 'react';
import PostList from '../components/Postlist';
import '../css/Home.css';

const Home = () => {
    return (
        <main>
            <div>
                <h1>Chào Mừng Đến Với Blog Hội Họa Của Tôi</h1>

                <section>
                    <h2>Tác Phẩm Nổi Bật: Mona Lisa</h2>

                    <div className='content'>
                        <div className='img'>

                            <img src="/asset/monalisa.jpg" alt="Mona Lisa" style={{ width: '250%', height: 'auto' }} />
                        </div>

                        <div>
                            <p>
                                <strong>Mona Lisa</strong>, còn được biết đến với tên gọi <strong>La Gioconda</strong>, là một trong những tác phẩm nổi tiếng nhất của danh họa người Ý <strong>Leonardo da Vinci</strong>.
                                Được vẽ vào đầu thế kỷ 16 (khoảng năm 1503-1506), bức tranh này mô tả chân dung một phụ nữ với nụ cười bí ẩn, được cho là Lisa Gherardini, vợ của một thương gia người Florence.
                            </p>
                            <ul>
                                <li><strong>Kích thước</strong>: 77 cm × 53 cm.</li>
                                <li><strong>Chất liệu</strong>: Sơn dầu trên gỗ dương.</li>
                                <li><strong>Vị trí hiện tại</strong>: Trưng bày tại <strong>Bảo tàng Louvre</strong>, Paris, Pháp.</li>
                            </ul>
                            <p>
                                Điểm nổi bật của tác phẩm là kỹ thuật <strong>sfumato</strong> được sử dụng để làm mờ các ranh giới và chi tiết, mang đến vẻ mềm mại cho khuôn mặt và tạo nên nụ cười khó nắm bắt của người phụ nữ.
                                Đôi mắt của nhân vật cũng là một điểm thu hút vì khi thay đổi góc nhìn, ánh mắt vẫn dường như đang dõi theo người xem.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Các Sự Kiện Nghệ Thuật Sắp Diễn Ra Tại Paris</h2>
                    <ul>
                        <li>
                            <h3>Triển lãm "Leonardo da Vinci: Beyond the Masterpieces"</h3>
                            <p><strong>Thời gian</strong>: Từ ngày 10 tháng 11 năm 2024 đến ngày 15 tháng 2 năm 2025.</p>
                            <p><strong>Địa điểm</strong>: Bảo tàng Louvre, Paris.</p>
                            <p>Nội dung: Triển lãm này sẽ trưng bày những tác phẩm ít được biết đến của Leonardo da Vinci bên cạnh các tác phẩm nổi tiếng như "Mona Lisa" và "The Last Supper". Sự kiện sẽ khám phá các ghi chép, bản vẽ phác thảo, và nghiên cứu khoa học của ông để mang đến cái nhìn toàn diện hơn về tài năng đa dạng của ông.</p>
                        </li>
                        <li>
                            <h3>Hội chợ nghệ thuật đương đại Paris (FIAC)</h3>
                            <p><strong>Thời gian</strong>: Từ ngày 17 đến 20 tháng 10 năm 2024.</p>
                            <p><strong>Địa điểm</strong>: Grand Palais Éphémère và các địa điểm khác tại Paris.</p>
                            <p>Nội dung: FIAC là một trong những hội chợ nghệ thuật đương đại lớn nhất thế giới, thu hút các nghệ sĩ, nhà sưu tập và nhà trưng bày từ khắp nơi trên thế giới. Sự kiện sẽ giới thiệu nhiều tác phẩm nghệ thuật từ các nghệ sĩ nổi tiếng và mới nổi, tạo cơ hội để tìm hiểu về xu hướng mới nhất trong nghệ thuật đương đại.</p>
                        </li>
                        <li>
                            <h3>Triển lãm "Women Painters of the Renaissance"</h3>
                            <p><strong>Thời gian</strong>: Từ ngày 1 tháng 12 năm 2024 đến ngày 28 tháng 3 năm 2025.</p>
                            <p><strong>Địa điểm</strong>: Musée d'Orsay, Paris.</p>
                            <p>Nội dung: Triển lãm tập trung vào những họa sĩ nữ thời kỳ Phục hưng, giới thiệu tác phẩm của các nghệ sĩ như Sofonisba Anguissola và Artemisia Gentileschi, nhằm tôn vinh vai trò của phụ nữ trong nghệ thuật thời kỳ này.</p>
                        </li>
                    </ul>
                </section>
            </div>
            <PostList />
        </main>
    );
};

export default Home;
