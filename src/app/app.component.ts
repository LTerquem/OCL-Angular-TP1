import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	allPosts = [
		{
			title: "Pourquoi les pandas c'est bien",
			contents : "Pandas bambou blablablablabla",
			loveIts : 0,
			createdAt : new Date()
		},
		{
			title: "Ce post n'a aucun intérêt",
			contents : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id finibus leo. Ut sollicitudin odio ut massa iaculis, id iaculis lectus ultricies. Vestibulum dignissim varius lacus, at rhoncus felis scelerisque sit amet. Maecenas faucibus metus quam, tincidunt laoreet orci egestas quis. Duis accumsan semper eros, et ornare elit dictum nec. Proin maximus velit eu lorem dictum consequat. Pellentesque ac velit purus.",
			loveIts : 0,
			createdAt : new Date()
		},
		{
			title: "Ce sont des paroles sympas que voilà",
			contents : "Life is a waterfall  We're one in the river And one again after the fall Swimming through the void We hear the word We lose ourselves but we find it all",
			loveIts : 0,
			createdAt : new Date()
		}
	];

}
