<div class="columns">
    <div class="column is-3 is-offset-3 field">
        <form acrtion="models/verifSearch.php" method="get">
            <label class="label">Company</label>
            <div class="control">
                <input class="input" type="search" placeholder="American Airlines" name="keywords">
                <input class="button" type="submit" name="buttonSearch" value="Search">
            </div>
        </form>
    </div>
    <div class="column is-3 is-offset-1 field">
        <label class="label">Handicaps</label>
        <div class="control">
            <div class="select is-info">
                <select>
                    <option value="0">Choice...</option>
                    <?php
                    require_once('models/verifSearch.php');
                    ?>
                </select>
            </div>
        </div>
    </div>
</div>
<div id="result">
    <div id="nbr">2 résult search</div>
    <ol>
        <li>Results 1</li>
    </ol>
</div>