import{c as r,e as h,d as a,p as u,j as g,b as p,q as d,w as m}from"./vendor-firebase-D_7brhDB.js";import{d as e}from"./index-DhfMHOKa.js";const l=(n=[])=>{const i="abcdefghijklmnopqrstuvwxyz123456789";let t="",c=0;do{t="";for(let o=0;o<4;o++)t+=i.charAt(Math.floor(Math.random()*i.length));c++}while(n.includes(t)&&c<100);return t},s=[{promptId:"pm01",name:"Tạo Kịch Bản Video Ngắn Triệu View (TikTok/Reels/Shorts)",category:"Video AI",coverImage:"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80",demoVideoUrl:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",shortDescription:"Cấu trúc Hook 3 giây đầu, nội dung kịch tính và Call To Action chuẩn chuyển đổi cao cho video ngắn đa nền tảng.",description:`### Tổng quan Prompt
Mẫu prompt chuyên sâu giúp nhà sáng tạo nội dung và doanh nghiệp tự động hóa việc lên ý tưởng và kịch bản video viral.

#### Ưu điểm nổi bật:
* **Hook giữ chân người xem**: Cung cấp 5 góc tiếp cận khác nhau trong 3 giây đầu tiên.
* **Thời lượng chuẩn**: Chia phân cảnh chi tiết theo giây (0-3s, 3-15s, 15-45s, 45-60s).
* **Chỉ dẫn hình ảnh & âm thanh**: Đầy đủ gợi ý visual, hiệu ứng âm thanh (SFX) và biểu cảm nhân vật.`,usageInstructions:"### Hướng dẫn sử dụng:\n1. Sao chép nội dung prompt bên dưới.\n2. Dán vào **ChatGPT**, **Claude** hoặc **Gemini**.\n3. Điền các trường thông tin trong ngoặc vuông: `[Chủ đề]`, `[Khách hàng mục tiêu]`, `[Mục tiêu video]`.\n4. Nhận kết quả 3 phương án kịch bản chi tiết.",promptContent:`Bạn là một chuyên gia sáng tạo nội dung video ngắn triệu view (Short-form Video Strategist) với hơn 10 năm kinh nghiệm trên TikTok, YouTube Shorts và Instagram Reels.

Hãy tạo cho tôi 3 kịch bản video ngắn (thời lượng 45 - 60 giây) về chủ đề: [NHẬP CHỦ ĐỀ CỦA BẠN TẠI ĐÂY]
- Khách hàng mục tiêu: [NHẬP ĐỐI TƯỢNG MỤC TIÊU]
- Mục tiêu chuyển đổi: [NHẬP MỤC TIÊU: Tăng follow / Bán hàng / Tương tác]

Mỗi kịch bản phải tuân theo cấu trúc sau:
1. Tiêu đề video (Giật tít, tò mò, gây chú ý mạnh)
2. Hook 3 giây đầu (Lời thoại + Hành động hình ảnh gây sốc/bất ngờ)
3. Phần thân (3 ý chính súc tích, giải quyết nỗi đau hoặc cung cấp giá trị bất ngờ)
4. Call to Action (Kêu gọi hành động ngắn gọn, tự nhiên)`,price:0,currency:"VND",rating:5,soldCount:380,featured:!0,status:"active"},{promptId:"pm02",name:"Viết Bài Chuẩn SEO & Bài PR Bán Hàng Chuyển Đổi Cao",category:"Content AI",coverImage:"https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80",shortDescription:"Tối ưu hóa dàn ý bài viết chuẩn SEO On-Page, kết hợp nghệ thuật Storytelling giữ chân người đọc từ đầu đến cuối.",description:`### Giới thiệu
Bộ câu lệnh xây dựng cấu trúc bài viết chuẩn SEO tối ưu hóa Semantic Search và ý định tìm kiếm (Search Intent) của Google.`,usageInstructions:`1. Copy prompt và nhập từ khóa chính cùng từ khóa phụ.
2. AI sẽ xây dựng dàn bài H2, H3 chuẩn SEO trước.
3. Sau khi bạn duyệt dàn bài, AI sẽ viết chi tiết từng đoạn văn mượt mà.`,promptContent:`Hãy đóng vai là một Chuyên gia Content Marketing và SEO Leader hàng đầu.
Tôi cần bạn viết một bài viết chuẩn SEO On-Page chuyên sâu về chủ đề: [NHẬP TỪ KHÓA / CHỦ ĐỀ]

Yêu cầu:
- Tối ưu Search Intent của người dùng tìm kiếm
- Cấu trúc H1, H2, H3 mạch lạc, logic
- Giọng văn chuyên nghiệp, gần gũi, giàu dẫn chứng thực tế
- Tích hợp từ khóa tự nhiên, không nhồi nhét
- Kết bài có phần FAQ giải đáp thắc mắc thường gặp`,price:0,currency:"VND",rating:4.9,soldCount:290,featured:!0,status:"active"}],y=async()=>{try{const n=r(e,"prompts"),i=await h(n);if(!i.empty)return i.docs.map(t=>({id:t.id,promptId:t.data().promptId||t.id,...t.data()}))}catch(n){console.warn("Lỗi getPrompts từ Firestore, sử dụng fallback:",n)}return s},f=async()=>(await y()).filter(i=>{const t=(i.status||"").toLowerCase();return t==="draft"||t==="hidden"?!1:t==="published"||t==="active"||t===""}),b=async n=>{if(!n)return null;try{const t=a(e,"prompts",n),c=await p(t);if(c.exists())return{id:c.id,promptId:c.data().promptId||c.id,...c.data()}}catch(t){console.warn("Direct prompt lookup error:",t)}try{const t=d(r(e,"prompts"),m("promptId","==",n)),c=await h(t);if(!c.empty){const o=c.docs[0];return{id:o.id,promptId:o.data().promptId||o.id,...o.data()}}}catch(t){console.warn("Query prompt by promptId error:",t)}const i=s.find(t=>t.promptId===n||t.id===n);return i||null},k=async n=>{const i=n.promptId||n.id||l(),t=a(e,"prompts",i),c={...n,promptId:i,price:Number(n.price||0),currency:n.currency||"VND",status:n.status||"active",updatedAt:new Date().toISOString()};return n.createdAt||(c.createdAt=new Date().toISOString()),await g(t,c,{merge:!0}),i},C=async n=>{const i=a(e,"prompts",n);await u(i)};export{y as a,l as b,b as c,C as d,f as g,k as s};
