<?php snippet_detect('html_head', array(
	'criticalcss' => 'base',
	'prev_next' => false,
	'prerender' => false,
)); ?>

	<?php snippet('banner'); ?>

	<main role="main" class="Contain">

		<div class="Copy u-spaceTrailerM">

			<h1><?php echo $page->title()->smartypants()->widont(); ?></h1>

			<?php echo $page->intro()->kirbytext(); ?>
			<?php echo $page->text()->kirbytext(); ?>

			<hr>

			<h2 id="buttons" class="BetaHeading u-spaceLeaderM">Button</h2>

			<p>
				<input type="submit" name="submit" value="Submit button" class="Button"/>
				<input type="button" name="submit" value="Input button" class="Button"/>
				<button class="Button">Button button</button>
				<a href="#" class="Button Button--primary" role="button">Anchor button (primary)</a>
			</p>

			<p><input type="submit" name="submit" value="Submit button" class="Button"/></p>
			<p><input type="button" name="submit" value="Input button (primary)" class="Button Button--primary"/></p>

			<p><input type="submit" name="submit" value="Small button" class="Button Button--small"/></p>
			<p><input type="submit" name="submit" value="Large button" class="Button Button--large"/></p>

			<p>
				<button class="Button Button--primary Button--full">Button button (primary, full)</button>
				<a href="#" class="Button Button--full" role="button">Anchor button (full)</a>
			</p>

			<p><button class="Button Button--primary is-disabled">Button button (primary, disabled)</button></p>
			<p class="u-spaceTrailerM"><a href="#" class="Button is-disabled" role="button">Anchor button (disabled)</a></p>

			<hr>

			<h2 id="form" class="BetaHeading">Form</h2>

			<form method="post" action="#" class="Form">

				<fieldset>
					<!-- <legend><span>Legend</span></legend> -->
					<ol class="Form-fields">
						<li class="Form-item Form-item--stacked">
							<label for="label" class="Form-label">Label</label>
							<input type="text" name="label" id="label" class="Form-input" required/>
						</li>
						<li class="Form-item Form-item--stacked">
							<fieldset>
								<span class="Form-label">Radio set <em class="Form-optional">(optional)</em></span>

								<ul class="InputSet InputSet--horizontal">
									<li>
										<label class="InputSet-label">
											<input type="radio" name="radioset" value="Option 1"/>
											<span>Option 1</span>
										</label>
									</li>
									<li>
										<label class="InputSet-label">
											<input type="radio" name="radioset" value="Option 2"/>
											<span>Option 2</span>
										</label>
									</li>
									<li>
										<label class="InputSet-label">
											<input type="radio" name="radioset" value="Option 3"/>
											<span>Option 3</span>
										</label>
									</li>
									<li>
										<label class="InputSet-label">
											<input type="radio" name="radioset" value="Option 3"/>
											<span>Option 3</span>
										</label>
									</li>
								</ul>

							</fieldset>
						</li>
						<li class="Form-item Form-item--stacked">
							<label for="bmonth" class="Form-label">Date of birth</label>
							<select id="bmonth">
								<option>Month:</option>
								<option value="Jan">Jan</option>
								<option value="Feb">Feb</option>
							</select>
							<!-- <label for="bday">Birth day</label> -->
							<select id="bday">
								<option>Day:</option>
								<option value="1">01</option>
								<option value="2">02</option>
							</select>
							<!-- <label for="byear">Birth year</label> -->
							<select id="byear">
								<option>Year:</option>
								<option value="1979">1979</option>
								<option value="1980">1980</option>
							</select>
						</li>
						<li class="Form-item">
							<label for="text" class="Form-label">Type="text"</label>
							<input type="text" autocapitalize="none" name="text" id="text" class="Form-input" placeholder="Placeholder"/>
						</li>
						<li class="Form-item">
							<label for="email" class="Form-label">Type="email"</label>
							<input type="email" name="email" id="email" class="Form-input"/>
							<!-- <a href="#">Weet ik niet?</a> -->
						</li>
						<li class="Form-item">
							<label for="url" class="Form-label">Type="url"</label>
							<input type="url" name="url" id="url" class="Form-input"/>
						</li>
						<li class="Form-item">
							<label for="number" class="Form-label">Type="number"</label>
							<input type="number" name="number" id="number" class="Form-input"/>
						</li>
						<li class="Form-item">
							<label for="tel" class="Form-label">Type="tel"</label>
							<input type="tel" name="tel" id="tel" class="Form-input"/>
						</li>
						<li class="Form-item">
							<label for="password" class="Form-label">Type="password"</label>
							<input type="password" name="password" id="password" class="Form-input" value="password"/>
						</li>
						<li class="Form-item">
							<label for="zipcode" class="Form-label">Zip code</label>
							<input type="text" name="zipcode" id="zipcode" class="Form-input" pattern="^[0-9]{4}\s*[a-zA-Z]{2}" title="A Dutch zip code, with or without space" placeholder="1234 AB"/>
							<small class="Form-helper">Dutch zip code pattern check</small>
						</li>
						<li class="Form-item Form-item--stacked">
							<label for="select" class="Form-label">Select with optgroup <em class="Form-optional">(optional)</em></label>
							<select id="select">
							  <optgroup label="Optgroup 1">
							  <option value="Option 1">Option 1</option>
							  <option value="Option 2">Option 2</option>
							  <option value="Option 3">Option 3</option>
							  <option value="Option 4">Option 4</option>
							  <option value="Option 5">Option 5</option>
							  </optgroup>
							  <optgroup label="Optgroup 2">
							  <option selected="selected" value="Option 6">Option 6</option>
							  <option value="Option 7">Option 7</option>
							  <option value="Option 8">Option 8</option>
							  <option value="Option 9">Option 9</option>
							  <option value="Option 10">Option 10</option>
							  </optgroup>
							</select>
						</li>
						<li class="Form-item">
							<fieldset>
								<span class="Form-label">Check set</span>
								<ul class="InputSet">
									<li>
										<label class="InputSet-label">
											<input type="checkbox" name="checkset" value="Option 1"/>
											<span>Option 1</span>
										</label>
									</li>
									<li>
										<label class="InputSet-label">
											<input type="checkbox" name="checkset" value="Option 2"/>
											<span>Option 2</span>
										</label>
									</li>
									<li>
										<label class="InputSet-label">
											<input type="checkbox" name="checkset" value="Option 3"/>
											<span>Option 3</span>
										</label>
									</li>
									<li>
										<label class="InputSet-label">
											<input type="checkbox" name="checkset" value="Option 4"/>
											<span>Option 4</span>
										</label>
									</li>
								</ul>
							</fieldset>
						</li>
						<li class="Form-item Form-item--stacked">
							<label for="comments-textarea" class="Form-label">Comments</label>
							<textarea id="comments-textarea" rows="8" cols="24" class="Form-input Form-input--full"></textarea>
						</li>
					</ol>

					<p>
						<small>Uw persoonsgegevens worden alleen gebruikt voor het beantwoorden van de door u gestelde vraag. Ze worden niet langer bewaard dan voor dat doel nodig is. U kunt dit nalezen in onze <a href="#" title="privacyverklaring">privacyverklaring</a>.</small>
					</p>

				</fieldset>

				<input type="submit" name="submit" class="Button Button--full Button--primary" value="Submit button"/>

			</form>

			<hr>

		</div>

		<?php snippet('share_page'); ?>

	</main>

<?php snippet_detect('footer'); ?>
