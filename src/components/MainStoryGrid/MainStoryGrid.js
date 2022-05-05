import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { BREAKPOINTS, COLORS, QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <StoryWrapper key={story.id}>
            <SecondaryStory  {...story} />
            </StoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <StoryWrapper key={story.id}>
            <OpinionStory  {...story} />
            </StoryWrapper>
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const StoryWrapper = styled.div`
  &:not(:last-of-type){
  border-bottom: 2px solid ${COLORS.primary};
  padding-bottom: 16px;
  margin-bottom: 16px;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp}{
    grid-template-columns: 2fr 1fr;
    gap: 48px 0px;
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';
  }

`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp}{
    padding-right: 16px;
    margin-right: 16px;
    border-right : 1px solid ${COLORS.primary};
    gap : 0px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid ${COLORS.gray}

`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
