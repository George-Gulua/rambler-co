import classes from './ProjectList.module.scss'
import { ILink } from '../../../../types/ILink'

const ProjectList = () => {
	const urls: ILink[] = [
		{ id: 0, title: 'Проекты', path: '/' },
		{ id: 1, title: 'О нас', path: '/about' },
		{ id: 2, title: 'Отзывы', path: '/reviews' }
	]

	return (
		<div className={classes['project-list']}>
			<h2 className={classes['project-list__title']}>Наши проекты</h2>
			<p className={classes['project-list__text']}>За все время существования компании Rambler&CO были созданы тысячи проектов. Вы можете ознакомиться с каждой нашей работой.</p>
			{
			}
		</div>
	)
}

export default ProjectList