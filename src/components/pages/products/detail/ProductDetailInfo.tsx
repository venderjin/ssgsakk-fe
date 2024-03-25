"use client";
import { useState, useRef, useEffect } from "react";
import TriangleDown from "@/components/images/TriangleDown";

const detailData = `<div class="mndtl_tmpl_detail">
                            
<div class="mndtl_tmpl_html">
    
        
            
                
                
<link rel="stylesheet" href="https://sui.ssgcdn.com/ui/common/img/bo/editor/ssgQuotePlugin/ssgQuotePlugin.css"> 
<link rel="stylesheet" href="https://sui.ssgcdn.com/ui/common/img/bo/editor/ssgHorizontalLinePlugin/ssgHorizontalLinePlugin.css"> 
<div class="se-contents" style="box-sizing: content-box;" data-document-padding-top="18" data-document-padding-left="23" data-document-padding-right="23"> 
<p style="margin: 16px 0px; display: block; overflow-wrap: break-word;"><span>배색 원피스 입니다.</span></p> 
<p style="margin: 16px 0px; display: block; overflow-wrap: break-word;"><span>상의는 보폴 많이 안일어나는 니트이며</span></p> 
<p style="margin: 16px 0px; display: block; overflow-wrap: break-word;"><span>스커트는 바스락 거리는 신축성 좋은 원단으로 편하게 착용하기 좋아요.</span></p> 
<p style="margin: 16px 0px; display: block; overflow-wrap: break-word;"><span>색상:블랙,베이지,그레이</span></p> 
<p style="margin: 16px 0px; display: block; overflow-wrap: break-word;"><span>사이즈:FREE</span></p> 
<p style="margin: 16px 0px; display: block; overflow-wrap: break-word;"><span>가슴단면:48CM,총기장:118CM&nbsp;</span></p> 
<p style="margin: 16px 0px; display: block; overflow-wrap: break-word;"><span>측정 위치에 따라 1~2CM 차이가 있을수 있습니다.</span></p> 
</div>
                
                
                
            
        
    
        
    
</div>



<div class="tmpl_guide_v2">
        
    
        <div class="tmpl_img tmpl_grocery_back_label">
            <img class="ssg_lazy loaded" src="//sitem.ssgcdn.com/80/52/82/qlty/1000559825280_q1.jpg" data-src="//sitem.ssgcdn.com/80/52/82/qlty/1000559825280_q1.jpg" alt="품질표시이미지1" data-ll-status="loaded">
        </div>
    
        <div class="tmpl_img tmpl_grocery_back_label">
            <img class="ssg_lazy loaded" src="//sitem.ssgcdn.com/80/52/82/qlty/1000559825280_q2.jpg" data-src="//sitem.ssgcdn.com/80/52/82/qlty/1000559825280_q2.jpg" alt="품질표시이미지2" data-ll-status="loaded">
        </div>
    
        <div class="tmpl_img tmpl_grocery_back_label">
            <img class="ssg_lazy loaded" src="//sitem.ssgcdn.com/80/52/82/qlty/1000559825280_q3.jpg" data-src="//sitem.ssgcdn.com/80/52/82/qlty/1000559825280_q3.jpg" alt="품질표시이미지3" data-ll-status="loaded">
        </div>
    
    
    
        <div class="tmpl_img_guide">
            <img class="ssg_lazy loaded" src="//sui.ssgcdn.com/ui/m_ssg/img/ico_tmpl_pinch.png" data-src="//sui.ssgcdn.com/ui/m_ssg/img/ico_tmpl_pinch.png" alt="이미지를 확대하면 자세히 보실수 있습니다." data-ll-status="loaded">
        </div>
    
</div>


<!-- 상품이미지 (1~10) -->

<div class="mndtl_tmpl_imgbx">
    
        
        
        
            
                
                    <div class="mndtl_tmpl_img">
                        <img class="ssg_lazy loaded" src="https://sitem.ssgcdn.com/80/52/82/item/1000559825280_i1_750.jpg" data-src="https://sitem.ssgcdn.com/80/52/82/item/1000559825280_i1_750.jpg" alt="상품이미지1" data-ll-status="loaded">
                    </div>
                
                    <div class="mndtl_tmpl_img">
                        <img class="ssg_lazy loaded" src="https://sitem.ssgcdn.com/80/52/82/item/1000559825280_i2_750.jpg" data-src="https://sitem.ssgcdn.com/80/52/82/item/1000559825280_i2_750.jpg" alt="상품이미지2" data-ll-status="loaded">
                    </div>
                
                    <div class="mndtl_tmpl_img">
                        <img class="ssg_lazy loaded" src="https://sitem.ssgcdn.com/80/52/82/item/1000559825280_i3_750.jpg" data-src="https://sitem.ssgcdn.com/80/52/82/item/1000559825280_i3_750.jpg" alt="상품이미지3" data-ll-status="loaded">
                    </div>
                
                    <div class="mndtl_tmpl_img">
                        <img class="ssg_lazy loaded" src="https://sitem.ssgcdn.com/80/52/82/item/1000559825280_i4_750.jpg" data-src="https://sitem.ssgcdn.com/80/52/82/item/1000559825280_i4_750.jpg" alt="상품이미지4" data-ll-status="loaded">
                    </div>
                
                    <div class="mndtl_tmpl_img">
                        <img class="ssg_lazy loaded" src="https://sitem.ssgcdn.com/80/52/82/item/1000559825280_i5_750.jpg" data-src="https://sitem.ssgcdn.com/80/52/82/item/1000559825280_i5_750.jpg" alt="상품이미지5" data-ll-status="loaded">
                    </div>
                
                    <div class="mndtl_tmpl_img">
                        <img class="ssg_lazy loaded" src="https://sitem.ssgcdn.com/80/52/82/item/1000559825280_i6_750.jpg" data-src="https://sitem.ssgcdn.com/80/52/82/item/1000559825280_i6_750.jpg" alt="상품이미지6" data-ll-status="loaded">
                    </div>
                
                    <div class="mndtl_tmpl_img">
                        <img class="ssg_lazy loaded" src="https://sitem.ssgcdn.com/80/52/82/item/1000559825280_i7_750.jpg" data-src="https://sitem.ssgcdn.com/80/52/82/item/1000559825280_i7_750.jpg" alt="상품이미지7" data-ll-status="loaded">
                    </div>
                
                    <div class="mndtl_tmpl_img">
                        <img class="ssg_lazy loaded" src="https://sitem.ssgcdn.com/80/52/82/item/1000559825280_i8_750.jpg" data-src="https://sitem.ssgcdn.com/80/52/82/item/1000559825280_i8_750.jpg" alt="상품이미지8" data-ll-status="loaded">
                    </div>
                
                    <div class="mndtl_tmpl_img">
                        <img class="ssg_lazy loaded" src="https://sitem.ssgcdn.com/80/52/82/item/1000559825280_i9_750.jpg" data-src="https://sitem.ssgcdn.com/80/52/82/item/1000559825280_i9_750.jpg" alt="상품이미지9" data-ll-status="loaded">
                    </div>
                
                    <div class="mndtl_tmpl_img">
                        <img class="ssg_lazy loaded" src="https://sitem.ssgcdn.com/80/52/82/item/1000559825280_i10_750.jpg" data-src="https://sitem.ssgcdn.com/80/52/82/item/1000559825280_i10_750.jpg" alt="상품이미지10" data-ll-status="loaded">
                    </div>
                
            
        
    
</div>




<div class="mndtl_tmpl_ssgtips ty_grocery">
    
</div>


<!-- 피팅/실측 정보 -->
<div id="itemAppeProp">



















<div class="mndtl_tmpl_size">
<div class="size_info">
<!-- 피팅정보 -->

<h5 class="tit_info">피팅정보</h5>
<div class="cont_info">
<table summary="조건별 피팅정보 보여주는 표">
<caption><span class="blind">조건별 피팅정보</span></caption>
<colgroup><col style="width:20%"><col style="width:20%"><col style="width:20%"><col style="width:20%"><col style="width:20%"></colgroup>
<tbody>


<tr>
<th scope="row"><div class="tbl_cont">착용 계절</div></th>
<!-- 상품외형항목의 공통 코드값으로 항목 노출 -->

    
        <td>
            <div class="tbl_cont on">
                <span class="ico_chk">선택됨</span>
                <span class="fit_info">봄/가을</span>
            </div>
        </td>
        
    

    
        <td>
            <div class="tbl_cont ">
                <span class="ico_chk">선택됨</span>
                <span class="fit_info">여름</span>
            </div>
        </td>
        
    

    
        <td>
            <div class="tbl_cont ">
                <span class="ico_chk">선택됨</span>
                <span class="fit_info">겨울</span>
            </div>
        </td>
        
    

    
        <td>
            <div class="tbl_cont ">
                <span class="ico_chk">선택됨</span>
                <span class="fit_info">사계절용</span>
            </div>
        </td>
        
    

</tr>

<tr>
<th scope="row"><div class="tbl_cont">핏정보</div></th>
<!-- 상품외형항목의 공통 코드값으로 항목 노출 -->

    
        <td>
            <div class="tbl_cont ">
                <span class="ico_chk">선택됨</span>
                <span class="fit_info">슬림핏</span>
            </div>
        </td>
        
    

    
        <td>
            <div class="tbl_cont on">
                <span class="ico_chk">선택됨</span>
                <span class="fit_info">기본핏</span>
            </div>
        </td>
        
    

    
        <td>
            <div class="tbl_cont ">
                <span class="ico_chk">선택됨</span>
                <span class="fit_info">루즈핏</span>
            </div>
        </td>
        <!-- maxColum 에 맞게 빈 td 노출 -->
            
                <td>&nbsp;</td>
            
        
    

</tr>

<tr>
<th scope="row"><div class="tbl_cont">신축성</div></th>
<!-- 상품외형항목의 공통 코드값으로 항목 노출 -->

    
        <td>
            <div class="tbl_cont on">
                <span class="ico_chk">선택됨</span>
                <span class="fit_info">있음</span>
            </div>
        </td>
        
    

    
        <td>
            <div class="tbl_cont ">
                <span class="ico_chk">선택됨</span>
                <span class="fit_info">없음</span>
            </div>
        </td>
        <!-- maxColum 에 맞게 빈 td 노출 -->
            
                <td>&nbsp;</td>
            
                <td>&nbsp;</td>
            
        
    

</tr>

<tr>
<th scope="row"><div class="tbl_cont">안감</div></th>
<!-- 상품외형항목의 공통 코드값으로 항목 노출 -->

    
        <td>
            <div class="tbl_cont ">
                <span class="ico_chk">선택됨</span>
                <span class="fit_info">있음</span>
            </div>
        </td>
        
    

    
        <td>
            <div class="tbl_cont on">
                <span class="ico_chk">선택됨</span>
                <span class="fit_info">없음</span>
            </div>
        </td>
        
    

    
        <td>
            <div class="tbl_cont ">
                <span class="ico_chk">선택됨</span>
                <span class="fit_info">기모</span>
            </div>
        </td>
        <!-- maxColum 에 맞게 빈 td 노출 -->
            
                <td>&nbsp;</td>
            
        
    

</tr>

<tr>
<th scope="row"><div class="tbl_cont">비침</div></th>
<!-- 상품외형항목의 공통 코드값으로 항목 노출 -->

    
        <td>
            <div class="tbl_cont ">
                <span class="ico_chk">선택됨</span>
                <span class="fit_info">있음</span>
            </div>
        </td>
        
    

    
        <td>
            <div class="tbl_cont on">
                <span class="ico_chk">선택됨</span>
                <span class="fit_info">없음</span>
            </div>
        </td>
        <!-- maxColum 에 맞게 빈 td 노출 -->
            
                <td>&nbsp;</td>
            
                <td>&nbsp;</td>
            
        
    

</tr>

</tbody>
</table>
</div>


<!-- 실측정보 -->

</div>
</div>


<script type="text/javascript">
// 피팅정보 탭 이미지 변경
if($('.mndtl_tmpl_size').find('.real_view').length){
var oProductDetailImageTabViewer = new mndtl.View.imageTabViewer();
}
</script>
</div>





<button class="btn_a11y SummaryText" onclick="javascript:itemDtlDescImgOcrVoiceSupportSummaryText();">이미지 OCR 대체 텍스트 음성지원 요약본 듣기</button>
<button class="btn_a11y FullText" onclick="javascript:itemDtlDescImgOcrVoiceSupportFullText();">이미지 OCR 대체 텍스트 음성지원 전체 듣기</button>
</div>

`;

const ProductDetailInfo = () => {
  const [detailMore, setDetailMore] = useState<boolean>(false);
  const detailRef = useRef<HTMLDivElement>(null);
  const [detailHeight, setDetailHeight] = useState<number>(1200);

  // 페이지 로드 시 상세정보의 높이 계산하여 저장
  useEffect(() => {
    if (detailRef.current) {
      setDetailHeight(detailRef.current.clientHeight);
    }
  }, []);

  // 펼치기/접기 버튼 클릭 시 상세정보의 높이 조절
  const toggleDetail = () => {
    setDetailMore(!detailMore);
    setDetailHeight(detailMore ? 1200 : detailRef.current?.scrollHeight || 0);
  };

  return (
    <div className="px-[20px] mt-[50px] mb-[52px] font-Pretendard">
      <div
        className="overflow-hidden"
        ref={detailRef}
        style={{ maxHeight: detailMore ? "none" : `${detailHeight}px` }}
      >
        <div dangerouslySetInnerHTML={{ __html: detailData }} />
      </div>

      {/* 상세정보 펼쳐보기 */}
      <div>
        <button
          onClick={toggleDetail}
          className="w-full h-[50px] text-[14px] flex items-center justify-center"
        >
          <span>{!detailMore ? "상세정보 펼쳐보기" : "상세정보 접기"}</span>
          <div className="ml-[5px]">
            <TriangleDown rotate={detailMore ? "180" : ""} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
