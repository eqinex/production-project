import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames('', {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text className={cls.commentTitle} title={t('Комментарий')} />
            <CommentList comments={[
                {
                    id: 1,
                    text: 'comment 1',
                    user: {
                        id: 1,
                        username: 'eqinex',
                        avatar: 'https://i.ebayimg.com/images/g/smkAAOSw0AZj4NDR/s-l400.jpg',
                    },
                },
                {
                    id: 2,
                    text: 'comment 2',
                    user: {
                        id: 1,
                        username: 'eqinex',
                        avatar: 'https://i.ebayimg.com/images/g/smkAAOSw0AZj4NDR/s-l400.jpg',
                    },
                },
            ]}
            />
        </div>
    );
};

export default memo(ArticleDetailsPage);
