import { MainLayout, SectionContainer } from 'components';
import {
  IntroSection, AboutSection, LoginSection, CreateAvatarSection,
} from 'sections';
import { SectionIdEnum } from 'types';

const sections = [
  {
    sectionId: SectionIdEnum.intro,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.about,
    component: <AboutSection />,
  },
  {
    sectionId: SectionIdEnum.createYourAvatar,
    component: <CreateAvatarSection />,
  },
  {
    sectionId: SectionIdEnum.login,
    component: <LoginSection />,
  },
];

export const Main: React.FC = () => {
  return (
    <MainLayout>
      {sections.map(({ component, sectionId }) => {
        return (
          <SectionContainer sectionId={sectionId} key={sectionId}>
            {component}
          </SectionContainer>
        );
      })}
    </MainLayout>
  );
};
