<div class="ProjectPage" id="ProjectPage-<%= id %>">
	<div class="ProjectHeader">
		<div class="ProjectType">Projet</div>
		<h1 class="ProjectTitle title"><%= title %></h1>
		<div class="ProjectDetails">
			<div class="ProjectDetailPart">
				<div class="ProjectDetailPart-key">Mon Role</div>
				<div class="ProjectDetailPart-value"><%= roles %></div>
			</div>
			<div class="ProjectDetailPart">
				<div class="ProjectDetailPart-key">Année</div>
				<div class="ProjectDetailPart-value"><%= year %></div>
			</div>
			<div class="ProjectDetailPart">
				<div class="ProjectDetailPart-key">Agence</div>
				<div class="ProjectDetailPart-value"><%= agency %></div>
			</div>
		</div>
		<div class="ProjectRichText"><%= richText %></div>
	</div>
	<div class="ProjectCover">
		<img src="img/projects/<%= id %>/<%= coverName %>">
	</div>
	<div class="ProjectContent">
		<%= projectTemplate %>
	</div>
</div>