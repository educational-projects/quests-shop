import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { useSelector } from 'react-redux';
import { ComplexityToRussian } from 'const';
import { FilersType } from './constants';
import { getCurrentFilter } from 'store/app/selectors';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'store/action';
import { getFilteredQuests } from 'store/quests/selectors';
import { getCapitalizingString } from 'utils/utils';

const QuestsCatalog = () => {
  const dispatch = useDispatch();
  const quests = useSelector(getFilteredQuests);
  const currentFilter = useSelector(getCurrentFilter);

  return (
    <>
    <S.Tabs>
      {FilersType.map(({title, icon: Icon}) => {
        return (
          <S.TabItem
          onClick={() => dispatch(changeFilter(title))}
          key={title}
          >
          <S.TabBtn isActive={currentFilter === title}>
            <Icon />
            <S.TabTitle>{title}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
        )
      })}
    </S.Tabs>

    <S.QuestsList>
      {quests.map(({id, previewImg, title, peopleCount, level}) => (
              <S.QuestItem key={id}>
              <S.QuestItemLink to={`quest/${id}`}>
                <S.Quest>
                  <S.QuestImage
                    src={previewImg}
                    width="344"
                    height="232"
                    alt={`квест ${title}`}
                  />
                  <S.QuestContent>
                    <S.QuestTitle>{title}</S.QuestTitle>
                    <S.QuestFeatures>
                      <S.QuestFeatureItem>
                        <IconPerson />
                        {peopleCount.join('-')}
                      </S.QuestFeatureItem>
                      <S.QuestFeatureItem>
                        <IconPuzzle />
                        {ComplexityToRussian[getCapitalizingString(level)]}
                      </S.QuestFeatureItem>
                    </S.QuestFeatures>
                  </S.QuestContent>
                </S.Quest>
              </S.QuestItemLink>
            </S.QuestItem>
      ))}
    </S.QuestsList>
  </>
  )
};

export default QuestsCatalog;
