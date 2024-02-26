import * as S from './footer.style';
import LinkButton from '@/components/common/Button/LinkButton';
import * as I from '@/components/icons/index';

const Footer = () => {
  const securityLinks = () => {
    const links = [
      { label: '이용약관', to: '/' },
      { label: '개인정보 처리 방침', to: '/' },
      { label: '이메일 무단 수집 금지', to: '/' },
    ];

    return links.map((link, index) => (
      <LinkButton label={link.label} to={link.to} key={index} />
    ));
  };

  const socialLinks = () => {
    const links = [
      { label: <I.Naver />, to: 'https://www.naver.com/' },
      { label: <I.Twitter />, to: '/' },
      { label: <I.Instagram />, to: '/' },
      { label: <I.Facebook />, to: '/' },
    ];

    return links.map((link, index) => (
      <LinkButton label={link.label} to={link.to} key={index} />
    ));
  };

  return (
    <>
      <S.Footer>
        <S.MainInfo>
          <S.Logo>회사로고</S.Logo>
          <S.InfoStyle>
            <S.CompanyInfoDetail>회사주소</S.CompanyInfoDetail>
            <S.CompanyInfo>
              <S.CompanyInfoDetail>대표이사 : 이름</S.CompanyInfoDetail>|
              <S.CompanyInfoDetail>T.000-0000-0000</S.CompanyInfoDetail>|
              <S.CompanyInfoDetail>F.팩스번호</S.CompanyInfoDetail>|
              <S.CompanyInfoDetail>E.sample@gmail.com</S.CompanyInfoDetail>
            </S.CompanyInfo>
            <S.CompanyInfoDetail>
              사업자 등록번호 : 사업자 등록번호
            </S.CompanyInfoDetail>
          </S.InfoStyle>
          <S.InfoName>© 회사이름</S.InfoName>
        </S.MainInfo>
        <S.OtherInfo>
          <S.Security>{securityLinks()}</S.Security>
          <S.Social>{socialLinks()}</S.Social>
        </S.OtherInfo>
      </S.Footer>
    </>
  );
};

export default Footer;
