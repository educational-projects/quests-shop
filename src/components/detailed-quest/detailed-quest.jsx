import { useCallback, useEffect, useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { fetchQuestAction } from 'store/api-actions';
import { useSelector } from 'react-redux';
import { getQuest, getQuestError, getQuestLoading } from 'store/quests/selectors';
import NotFoundPage from 'components/not-found/not-found';
import { ComplexityToRussian, QuestTypeToRussian } from 'const';
import LoadingPage from 'components/loading/loading';
import { resetQuest } from 'store/action';
import { getCapitalizingString } from 'utils/utils';

const DetailedQuest = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onPageUnload = useCallback(() => {
    dispatch(resetQuest())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchQuestAction(id))

    return () => onPageUnload()
  }, [dispatch, id, onPageUnload])

  const quest = useSelector(getQuest)
  const questError = useSelector(getQuestError)
  const questLoading = useSelector(getQuestLoading)

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(!isBookingModalOpened);
  };

  if(questLoading) {
    return <LoadingPage/>
  }

  if(!quest || questError) {
    return <NotFoundPage/>
  }

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${quest.coverImg}`}
          alt={`Квест ${quest.title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{quest.title}</S.PageTitle>
            <S.PageSubtitle>{QuestTypeToRussian[getCapitalizingString(quest.type)]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${quest.duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${quest.peopleCount.join('-')} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>
                  {ComplexityToRussian[getCapitalizingString(quest.level)]}
                </S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {quest.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onButtonClick={onBookingBtnClick} />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
