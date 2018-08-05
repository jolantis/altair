<?php snippet('html-head', array('criticalcss' => 'base')); ?>

	<?php snippet('banner'); ?>

	<main role="main" class="copy copy--contain space-trailer-l">

		<h1><?php echo $page->title()->smartypants()->widont(); ?></h1>

		<?php echo $page->intro()->kirbytext(); ?>
		<?php echo $page->text()->kirbytext(); ?>

		<hr>

		<h2 id="buttons" class="beta-heading space-leader-m">Button</h2>

		<p>
			<input type="submit" name="submit" value="Submit button" class="button"/>
			<input type="button" name="submit" value="Input button" class="button"/>
		</p>

		<p>
			<button class="button">Button button</button>
			<a href="#" class="button button--primary" role="button">Anchor button (primary)</a>
		</p>

		<p><input type="submit" name="submit" value="Submit button" class="button"/></p>
		<p><input type="button" name="submit" value="Input button (primary)" class="button button--primary"/></p>

		<p><input type="submit" name="submit" value="Small button" class="button button--small"/></p>
		<p><input type="submit" name="submit" value="Large button" class="button button--large"/></p>

		<p><button class="button button--primary button--full">Button button (primary, full)</button></p>
		<p><a href="#" class="button button--full" role="button">Anchor button (full)</a></p>

		<p><button class="button button--primary is-disabled">Button button (primary, disabled)</button></p>
		<p class="space-trailer-m"><a href="#" class="button is-disabled" role="button">Anchor button (disabled)</a></p>

		<hr>

		<h2 id="form" class="beta-heading">Form</h2>

		<form method="post" action="#" class="form">

			<fieldset>
				<!-- <legend><span>Legend</span></legend> -->
				<ol class="form__fields">
					<li class="form__item form__item--stacked">
						<label for="label" class="form__label">Label</label>
						<input type="text" name="label" id="label" class="form__input" required/>
					</li>
					<li class="form__item form__item--stacked">
						<fieldset>
							<span class="form__label">Radio set <em class="form__optional">(optional)</em></span>

							<ul class="input-set input-set--horizontal">
								<li>
									<label class="input-set__label">
										<input type="radio" name="radioset" value="Option 1"/>
										<span>Option 1</span>
									</label>
								</li>
								<li>
									<label class="input-set__label">
										<input type="radio" name="radioset" value="Option 2"/>
										<span>Option 2</span>
									</label>
								</li>
								<li>
									<label class="input-set__label">
										<input type="radio" name="radioset" value="Option 3"/>
										<span>Option 3</span>
									</label>
								</li>
								<li>
									<label class="input-set__label">
										<input type="radio" name="radioset" value="Option 3"/>
										<span>Option 3</span>
									</label>
								</li>
							</ul>

						</fieldset>
					</li>
					<li class="form__item form__item--stacked">
						<label for="bmonth" class="form__label">Date of birth</label>
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
					<li class="form__item">
						<label for="text" class="form__label">Type="text"</label>
						<input type="text" autocapitalize="none" name="text" id="text" class="form__input" placeholder="Placeholder"/>
					</li>
					<li class="form__item">
						<label for="email" class="form__label">Type="email"</label>
						<input type="email" name="email" id="email" class="form__input"/>
						<!-- <a href="#">Weet ik niet?</a> -->
					</li>
					<li class="form__item">
						<label for="url" class="form__label">Type="url"</label>
						<input type="url" name="url" id="url" class="form__input"/>
					</li>
					<li class="form__item">
						<label for="number" class="form__label">Type="number"</label>
						<input type="number" name="number" id="number" class="form__input"/>
					</li>
					<li class="form__item">
						<label for="tel" class="form__label">Type="tel"</label>
						<input type="tel" name="tel" id="tel" class="form__input"/>
					</li>
					<li class="form__item">
						<label for="password" class="form__label">Type="password"</label>
						<input type="password" name="password" id="password" class="form__input" value="password"/>
					</li>
					<li class="form__item">
						<label for="zipcode" class="form__label">Zip code</label>
						<input type="text" name="zipcode" id="zipcode" class="form__input" pattern="^[0-9]{4}\s*[a-zA-Z]{2}" title="A Dutch zip code, with or without space" placeholder="1234 AB"/>
						<small class="form__helper">Dutch zip code pattern check</small>
					</li>
					<li class="form__item form__item--stacked">
						<label for="select" class="form__label">Select with optgroup <em class="form__optional">(optional)</em></label>
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
					<li class="form__item">
						<fieldset>
							<span class="form__label">Check set</span>
							<ul class="input-set">
								<li>
									<label class="input-set__label">
										<input type="checkbox" name="checkset" value="Option 1"/>
										<span>Option 1</span>
									</label>
								</li>
								<li>
									<label class="input-set__label">
										<input type="checkbox" name="checkset" value="Option 2"/>
										<span>Option 2</span>
									</label>
								</li>
								<li>
									<label class="input-set__label">
										<input type="checkbox" name="checkset" value="Option 3"/>
										<span>Option 3</span>
									</label>
								</li>
								<li>
									<label class="input-set__label">
										<input type="checkbox" name="checkset" value="Option 4"/>
										<span>Option 4</span>
									</label>
								</li>
							</ul>
						</fieldset>
					</li>
					<li class="form__item form__item--stacked">
						<label for="comments-textarea" class="form__label">Comments</label>
						<textarea id="comments-textarea" rows="8" cols="24" class="form__input form__input--full"></textarea>
					</li>
				</ol>

				<p>
					<small>Uw persoonsgegevens worden alleen gebruikt voor het beantwoorden van de door u gestelde vraag. Ze worden niet langer bewaard dan voor dat doel nodig is. U kunt dit nalezen in onze <a href="#" title="privacyverklaring">privacyverklaring</a>.</small>
				</p>

			</fieldset>

			<input type="submit" name="submit" class="button button--full button--primary" value="Submit button"/>

		</form>

	</main>

	<?php snippet('share-page'); ?>

	<?php snippet('contentinfo'); ?>

<?php snippet('html-foot'); ?>
